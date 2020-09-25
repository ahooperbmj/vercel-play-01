import React from "react"
//import '../styles/index.css';
export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <h1>BMJ Chicken - new relic graphs</h1>
      <p>BMJ Chicken trans time</p>
      <iframe src="https://frame-rpm.eu.newrelic.com/public/charts/2uWQc4lRabS" width="500" height="300" scrolling="no" frameborder="no"></iframe>
      <h2>Apdex score:</h2>
      <iframe src="https://chart-embed.service.eu.newrelic.com/herald/d8a6323c-2997-408a-b547-b955ef0a866e?height=400px&timepicker=true" width="500" height="300" scrolling="no" frameborder="no"></iframe>
      <h2>Throughput:</h2>
      <iframe src="https://chart-embed.service.eu.newrelic.com/herald/10a5a8ac-4f52-47b4-9a9d-8dec45f9f47c?height=400px&timepicker=true" width="500" height="300" scrolling="no" frameborder="no"></iframe>
      <h2>Top 5 Web Trans:</h2>
      <iframe src="https://chart-embed.service.eu.newrelic.com/herald/3515f93a-af11-4fdc-bbb7-1235f4155706?height=400px&timepicker=true" width="500" height="300" scrolling="no" frameborder="no"></iframe>
    </div>
  )
}

