const getProfile = user => ({
    name: user.name,
    profile_img: user.profile_img || '/avatar_1.png',
    _id: user._id
})


export default getProfile;