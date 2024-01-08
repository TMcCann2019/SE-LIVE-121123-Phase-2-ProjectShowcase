import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"
import projectsArr from "./projects"

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects={projectsArr}/>
    </div>
  )
}

export default App;
