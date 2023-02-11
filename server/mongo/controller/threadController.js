const Thread = require('../models/thread');
const Comment = require('../models/comment');

module.exports = {
  getThread: async (req, res) => {
    const threadInfo = req.body;
    try {
      const getThreadInfo = await Thread.findById(threadInfo.threadId)
        .populate({
          path: 'author',
          path: 'comments',
          populate: {
            path: 'author'
          }
        })
        .exec()
      res.send(getThreadInfo)
    } catch (error) {
      console.log(error)
    }
  },
  getThreads: async (req, res) => {
    try {
      const getThreads = await Thread.find()
      .populate('author')
      .exec()
      console.log('get', getThreads)
      res.send(getThreads)
    } catch (error) {
      console.log(error)
    }
  },
  makeThread: async (req, res) => {
    const threadInfo = req.body;
    try {
      const obj = {
        title: threadInfo.title,
        author: threadInfo.author
      }
      const newThread = await Thread.create(obj)
      const thisThread = await Thread.findById(newThread._id)
        .populate('author')
        .exec()
      res.send(thisThread)
    } catch (error) {
      console.log(error)
    }
  },

  createComment: async (req, res) => {
    const data = req.body;
    try {
      const newComment = await Comment.create(data);
      const findThread = await Thread.findByIdAndUpdate(data.thread,
        { $push: { comments: newComment._id } }, { new: true })
        .populate('comments')
        .exec()
      res.send(findThread)
    } catch (error) {
      console.log(error)
    }
  },
  deleteComment: async (req, res) => {
    const thisThread = req.body
    try {
      let theThread = await Thread.findOneAndUpdate({ title: thisThread.title },
        { $pull: { comments: thisThread.commentId } }, { new: true })
        .populate({
          path: 'author',
          path: 'comments',
          populate: {
            path: 'author'
          }
        })
        .exec()
      await Comment.deleteOne({ _id: thisThread.commentId })
      res.send(theThread)
    } catch (error) {
      console.log(error)
    }
  },
  deleteThread: async (req, res) => {
    const data = req.body
    try {
      await Thread.deleteOne({ _id: data.id })
      let threads = await Thread.find()
        .populate('author')
        .exec()
      res.send(threads)
    } catch (error) {
      console.log(error)
    }
  }
};