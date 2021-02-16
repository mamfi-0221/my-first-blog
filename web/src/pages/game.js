import sanityClient from '@sanity/cli'

export default {
	name: 'post',
	title: 'Quiz',
	type: 'document',
	fields: [{
		name: 'title',
		title: 'Title',
		type: 'string'
	}
	]
}
