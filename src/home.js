import React from 'react'

export default function Home () {
  const usefulLinks = [
    ["React Hooks official docs", "https://reactjs.org/docs/hooks-intro.html"],
    ["Dan Abramov: Making sense of React Hooks", "https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889"],
    ["Dan Abramov: Why do hooks rely on call order?", "https://overreacted.io/why-do-hooks-rely-on-call-order/"],
    ["Dan Abramov: Complete guide to useEffect", "https://overreacted.io/a-complete-guide-to-useeffect/"],
    ["Dan Abramov: Making setInterval declarative with React Hooks", "https://overreacted.io/making-setinterval-declarative-with-react-hooks/"],
    ["Netlify - Deep dive: how do hooks realy work", "https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/"],
    ["Rudi Yardley - React Hooks: Not magic just arrays", "https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e"],
    ["Amelia Wattenberger: Thinking in React Hooks", "https://wattenberger.com/blog/react-hooks"],
    ["Esteban Herrera: Guide to useState", "https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/"],
    ["dinhhuyams: Introduction to useRef", "https://dev.to/dinhhuyams/introduction-to-useref-hook-3m7n"],
    ["Ohans Emmanuel: useEffect vs useLayoutEffect", "https://blog.logrocket.com/useeffect-vs-uselayouteffect/"],
    ["Eytan Manor: Under the hood of React’s hooks system", "https://medium.com/the-guild/under-the-hood-of-reacts-hooks-system-eb59638c9dba"],
    ["Jira clone (utilising hooks)", "https://github.com/oldboyxx/jira_clone"],
    ["Hooks provided by Redux", "https://react-redux.js.org/api/hooks"],
    ["Kent C. Dodds: Manually testing custom hooks", "https://www.youtube.com/watch?v=0e6WCQYg5tU"],
    ["React Hooks Testing Library", "https://react-hooks-testing-library.com/"],
    ["Dan Abramov explaining why the exhaustive-deps linting rule is necessary", "https://github.com/facebook/create-react-app/issues/6880#issuecomment-485912528"],
    ["Sebastian Markbåge's comment on the RFC for hooks (interesting)", "https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884"],
    ["Kent C Dodds: What will happen to the Container/Presenter Pattern? (old video but helpful)", "https://www.youtube.com/watch?v=l6GTpKLWllQ"],
    ["usehooks.com - Helpful custom hooks", "https://usehooks.com/"]
  ]

  return (
    <section id='intro'>
      <h1>Welcome</h1>
      <p>Here are some brief exercises to help you understand how we can replace class components with function components using hooks.</p>
      <p>There is a folder under <code>/exercises</code> where you can find the existing component coded as a class. Try to refactor it into a function component.</p>
      <p>Please view this in Chrome. The sandbox page in particular will only run in Chrome.</p>
      <br />
      <h2>Here are links to resources that helped me learn</h2>
      <ul>
        {usefulLinks.map(([title, href]) => <li key={href}><a href={href} title={title}>{title}</a></li>)}
      </ul>
      <br />
      <p>The workshop will be recorded live. Keep an eye on Workspace for the link so you can watch it back!</p>
      <p>Additionally, if you you think of any questions after the workshop has already ended, you can contact me on Slack, or post in a front-end related Slack channel.</p>
      <footer><p>Hope this helps! Happy learning,</p><p> - Jordan Richards</p></footer>
    </section>
  )
}
