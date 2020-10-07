const Profile = ({ name, title, image }) => (
    <div>
        <img className="h-56 w-56 mx-auto border-8 border-white rounded-full" src={image} alt={name} />
        <div className="text-center mt-4">
            <h3 className="font-bold text-xl">{name}</h3>
            <h4 className="text-base">{title}</h4>
        </div>
    </div>
)

export default Profile