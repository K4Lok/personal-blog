import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async (locale) => {
	const query = gql`
		query Posts($locale: Locale!) {
			posts(orderBy: createdAt_DESC, locales: [$locale]) {
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
				createdAt
				bannerImage {
					url
				}
			}
		}
  `

	const result = await request(graphqlAPI, query, { locale })

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

export const getPostDetails = async (slug, locale) => {
	const query = gql`
		query PostDetails($slug: String!, $locale: Locale!) {
			post(where: {slug: $slug}, locales: [$locale]) {
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
				isLicenseImage
			}
		}
	`

	const result = await request(graphqlAPI, query, { slug, locale })

	return result.post
}