 const uuid = require('uuid');
 const mongoose = require('mongoose');
 mongoose.Promise = global.Promise;



let postSchema = mongoose.Schema({
	//id : {type : Number, required : true, unique : true},
	tipo : {type : String, required : false},
	url : {type : String, required : false},
	name : {type : String, required : false},
	active : {type : Boolean, required : false}
});
let Posts = mongoose.model('Posts', postSchema);


const Listposts = {  //ListSports
	getimg : function(){
		return Posts.find({tipo:"Imagen"})
		.then (posts=>{
			return posts;
		})
		.catch(err => {
			throw new Error(err);
	   });
	},
	getlog : function(email){
		return Posts.find({ email : `${email}`})
		.then(posts => {
			if (posts){
				return posts;
			}
			throw new Err("email not found");
		})
		.catch(err =>{
			throw new Error(err);
		});
	},

	post : function(post){
		return Posts.create(post)
			.then(posts => {
				return posts;
			})
			.catch(err => {
				 throw new Error(err);
			});
	},
	delete: function(bodyId){
		return Posts.findOneAndRemove({_id : bodyId})
		//return Posts.findOne({ _id : bodyId})

			.then(post => {
				if (post){
					return post;
				}
				throw new Err("Post not found");
			})
			.catch(err => {
				throw new Error(err);
			})
	},

	putactive: function(body,paramsId){
		//let status= body.active;

		return Posts.findOneAndUpdate({email : paramsId}, { $set: body }, { new: true })
			.then(posts => {
				if (posts){
					return posts;
				}
				throw new Err("Post not found");
			})
			.catch(err =>{
				throw new Error(err);
			});

}

}




module.exports = {Listposts};





