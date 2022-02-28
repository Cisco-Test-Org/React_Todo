import classes from './TodoList.module.css'

function TodoList(){
    return(
        <div className={classes.list}>
            <ol>
                <li>todo item one</li>
                <li>todo item two</li>
                <li>todo item three</li>
                <li>todo item four</li>
            </ol>
        </div>
    )
}

export default TodoList