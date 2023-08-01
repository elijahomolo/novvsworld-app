exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/haiya/`,
    toPath: `https://www.youtube.com/watch?v=3wpx6rLPS2I`,
    isPermanent: true,
    redirectInBrowser: true,
    statusCode: 301,

  })
}
