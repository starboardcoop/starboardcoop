const Blurb = ({ title, caption }) => (
    <div className="bg-primary-light mt-4 p-4 rounded">
        <h3 className="text-xl text-gray-dark font-bold">{title}</h3>
        <p>{caption}</p>
    </div>
)

export default Blurb