const Section = props => (
    <section id={props.id} className={`py-20 px-8 text-center bg-top bg-cover ${props.className}`}>
        <div className="md:max-w-lg my-0 mx-auto">{props.children}</div>
    </section>
)

export default Section