import "./card.css"
export function ImportCss({task}){
    return <div className="card">
        <h1>Import Css styles</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia repellendus sunt quod doloribus, libero qui ratione nostrum alias nesciunt aperiam distinctio tempora veritatis deleniti sed atque temporibus inventore nobis sapiente.</p>
        <span className={task ? "bg-green":"bg-red"}>{task ? "Task complete": "Pending task"} </span>
    </div>
}