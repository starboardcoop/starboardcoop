const Section = props => (
    <section className={`py-20 px-8 text-center bg-top bg-cover bg-${props.backgroundImage} bg-${props.color} text-${props.textColor} ${props.className}`}>
        <div className="md:max-w-md my-0 mx-auto">{props.children}</div>
    </section>
)

export default Section