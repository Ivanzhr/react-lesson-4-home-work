import style from './app.css'

function count({props}) {
    return(
        <div
        className="count"
        >
            {props}
        </div>
    )
}

export default count;