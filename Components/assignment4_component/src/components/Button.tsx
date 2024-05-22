export default function Button(props: { btnName: string, className?: string }) {
    return (
        <button className={props.className ? props.className : "btn btn-primary rounded-0 m-1"}>{props.btnName}</button>
    );
}
