import "./Button.css"
function Button() {
    return (
        <div>
            <button
                title="button"
                className="shared-btn"
                onClick={()=>{
                    window.alert("shared button clicked")
                }}
            >
                Shared ButtonsSSS
            </button>
        </div>
    )
}
export default Button