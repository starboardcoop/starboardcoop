const Section = props => (
    <section className={`p-16 text-center bg-${props.color} text-${props.textColor}`}>{props.children}</section>
)

export default Section