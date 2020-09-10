const Section = props => (
    <section className={`py-20 px-8 md:h-70 text-center bg-top bg-cover bg-${props.backgroundImage} bg-${props.color} text-${props.textColor}`}>
        <div className="md:max-w-md my-0 mx-auto">{props.children}</div>
    </section>
)

export default Section