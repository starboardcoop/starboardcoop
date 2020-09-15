const Section = props => (
    <section className={`py-20 px-8 text-center bg-top bg-cover ${props.className}`}>
        <div id={props.id} className="md:max-w-md my-0 mx-auto">{props.children}</div>
    </section>
)

export default Section