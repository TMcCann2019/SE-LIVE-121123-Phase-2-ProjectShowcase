import projects from "../projects"
import ProjectListItem from "./ProjectListItem"

export default function ProjectList(props) {
    console.log(props)
    const {projects} = props

    const projectItem = projects.map(projectObj => 
        <ProjectListItem key= {projectObj.id} project={projectObj} />)

    return (
        <section>
            <h1>
                All Projects
            </h1>
            <ul className="cards">
                {/* {projects.map(projectObj => {
                    return<ProjectListItem project={projectObj}/>
                })} */}
                {projectItem}
            </ul>
        </section>
    )
}