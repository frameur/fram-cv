import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Javascript', xp: 1.1 },
      { id: 2, value: 'Css', xp: 1.2 },
      { id: 3, value: 'Php', xp: 0.2 },
      { id: 4, value: 'Python', xp: 0.1 },
    ],
    frameworks: [
      { id: 1, value: 'Reactjs', xp: 0.8 },
      { id: 2, value: 'Vuejs', xp: 0.3 },
      { id: 3, value: 'Bootstrap', xp: 0.3 },
      { id: 4, value: 'material UI', xp: 0.2 },
    ],
  }
  render() {
    let { languages, frameworks } = this.state
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliotheques"
          className="frameworksDisplay"
        />
      </div>
    )
  }
}

export default Languages
