import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
	const query = gql`
		query Posts {
			posts {
				id
				title
				slug
				categories {
					name
					slug
					color {
						hex
					}
				}
				content {
					html
				}
				createdAt
				bannerImage {
					url
				}
			}
		}
  `

	const result = await request(graphqlAPI, query)

	return result.posts
}

export const getCategories = async () => {
	const query = gql`
		query Categories {
			categories(orderBy: name_ASC) {
				name
				slug
				color {
					hex
				}
			}
		}
	`

	const result = await request(graphqlAPI, query)

	return result.categories
}

export const getPostDetails = async (slug) => {
	const query = gql`
		query PostDetails($slug: String!) {
			post(where: {slug: $slug}) {
				title
				slug
				categories {
					name
					color {
						hex
					}
				}
				content {
					html
				}
				createdAt
				bannerImage {
					url
				}
			}
		}
	`

	const result = await request(graphqlAPI, query, { slug })

	return result.post
}