const Section = props => (
    <section className={`py-16 px-8 md:px-56 text-center bg-${props.color} text-${props.textColor}`}>{props.children}</section>
)

export default Section