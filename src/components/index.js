import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const
  ENTER = 'Enter',
  TAB = 'Tab',
  BACKSPACE = 'Backspace',
  UP_ARROW = 'ArrowUp',
  UP_ARROW_COMPAT = 'Up',
  DOWN_ARROW = 'ArrowDown',
  DOWN_ARROW_COMPAT = 'Down'


const SuggestTags = (props) => {

  const {
    suggestionsPool = [],
    lowercase = true,
    onKeyDown = () => { },
    onKeyUp = () => { },
    onBlur = () => { },
    onFocus = () => { },
    onTagRemove = () => { },
    onTagAdd = () => { },
    onKeyPress = () => { },
    placeholder = '',
    classNames = {
      wrapper: '',
      container: '',
      input: '',
      ul: '',
      li: '',
      tag: ''
    }
  } = props

  const maxSuggestionLength = props.maxSuggestionLength || suggestionsPool.length
  const [tags, setTags] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [expanded, setExpanded] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0)
  const input = useRef()

  // filter suggestions on tags change
  useEffect(() => filterSuggestions(), [tags])

  const handleKeyDown = (e) => {
    let value = e.target.value.trim()

    switch (e.key) {
      case ENTER || TAB:
        if (selectedSuggestionIndex > 0) {
          const item = suggestions[selectedSuggestionIndex - 1]
          addTag(item)
          break
        }
        if (/\S/.test(value)) {
          if (lowercase) value = value.toLowerCase()
          addTag(value)
        }
        e.target.value = ''
        break
      case BACKSPACE:
        if (value === '') {
          removeTag(tags.length - 1)
        }
        break
      case UP_ARROW || UP_ARROW_COMPAT:
        if (selectedSuggestionIndex > 0) {
          setSelectedSuggestionIndex(selectedSuggestionIndex - 1)
        }
        break
      case DOWN_ARROW || DOWN_ARROW_COMPAT:
        if (selectedSuggestionIndex < suggestions.length) {
          setSelectedSuggestionIndex(selectedSuggestionIndex + 1)
        }
        break
      default:
        break
    }
    onKeyDown(e)
  }

  const hadnleKeyUp = (e) => {

    // terminate early if keys are up or down
    const isUpOrDownKey =
      e.key === UP_ARROW ||
      e.key === UP_ARROW_COMPAT ||
      e.key === DOWN_ARROW ||
      e.key === DOWN_ARROW_COMPAT
    if (isUpOrDownKey)
      return

    // else continue
    let value = e.target.value.trim()
    filterSuggestions(value)
    setSelectedSuggestionIndex(0)
    onKeyUp(e)
  }

  const handleSuggestionMouseDown = (e) => {
    // Prevents blur event of the input
    e.preventDefault()
  }

  const handleBlur = (e) => {
    setExpanded(false)
    reset()
    onBlur(e)
  }

  const handleFocus = (e) => {
    setExpanded(true)
    onFocus(e)
  }

  const removeTag = (index) => {
    const value = tags[index]
    const newSet = tags.filter((_, i) => i !== index)
    setTags(newSet)
    onTagRemove(newSet, value, index)
    // setSelectedSuggestionIndex(0)
  }

  const addTag = (value) => {
    // if lowercase is true modify before adding
    if (lowercase) value = value.toLowerCase()
    const newSet = [...tags, value]
    setTags(newSet)
    reset()
    onTagAdd(newSet, value)
  }

  const reset = () => {
    setSelectedSuggestionIndex(0)
    input.current.value = ''
  }

  const filterSuggestions = (searchValue = '') => {
    let counter = 0
    setSuggestions(suggestionsPool.filter((el, i) => {
      // terminate early if maxSuggestionsLegnth met
      if (counter >= maxSuggestionLength)
        return false
      // terminate early if already in tags
      let inTags = tags.indexOf(lowercase ? el.toLowerCase() : el) !== -1
      if (inTags)
        return false

      // filter out elements that contain searchTerm (case insensitive)
      counter++
      return el.toLowerCase().includes(searchValue.toLowerCase())
    }))
  }

  const getStylesForActiveSuggestion = (index) => {
    return `
      .__suggest_tags__ li:nth-child(${index}) {background: #b7cfe0;}
    `
  }

  return (
    <div
      className={classNames.wrapper}
    >
      {
        tags.map((tag, i) => (
          <button
            className={classNames.tag}
            onClick={() => removeTag(i)}
            key={i}
            title='Click to remove tag'
          >{tag}</button>
        ))
      }
      <div className={classNames.container}>
        <input
          className={classNames.input}
          onKeyDown={handleKeyDown}
          onKeyUp={hadnleKeyUp}
          onKeyPress={onKeyPress}
          ref={input}
          autoComplete="off"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
        {expanded && suggestions.length > 0 &&
          <>
            <ul className={classNames.ul}>
              {
                suggestions.map((item, i) => (
                  <li
                    key={i}
                    onClick={e => addTag(item)}
                    onMouseDown={handleSuggestionMouseDown}
                    className={classNames.li}
                  >
                    {item}
                  </li>
                ))
              }
            </ul>
            <style>{getStylesForActiveSuggestion(selectedSuggestionIndex)}</style>
          </>
        }
      </div>
    </div>
  )
}

SuggestTags.propTypes = {
  placeholder: PropTypes.string,
  suggestionsPool: PropTypes.arrayOf(PropTypes.string),
  lowercase: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onTagRemove: PropTypes.func,
  onTagAdd: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  maxSuggestionLength: PropTypes.number
}

export default SuggestTags