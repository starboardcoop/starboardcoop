const Profile = ({ name, title, image }) => (
    <div className="bg-red-200 mt-4">
        <img className="h-56 mx-auto border-8 border-primary-dark rounded-full" src={image} alt={name} />
        <div className="text-center mt-4">
            <h3 className="font-bold text-xl">{name}</h3>
            <h4 className="text-base">{title}</h4>
        </div>
    </div>
)

export default Profile