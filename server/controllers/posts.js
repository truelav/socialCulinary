import Post from '../models/Post'
import User from '../models/User'

// CREATE

export const createPost = async (req, res) => {
    try {

        const { userId, description, picturePath } = req.body
        const user = await User.findById(userId)

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}