export const PostSummary = (props) => {
    return (
        <div className="border max-w-xl mx-auto p-5 mb-5">
            <h3 className="font-bold text-xl border-b mb-4">{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}
