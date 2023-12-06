import { Router } from 'express'
import { readdirSync } from 'node:fs'
import { parse, join } from 'node:path'

const pathModules = join(__dirname, '../modules')
const routes = Router()

const cleanFileName = (fileName: string): string => parse(fileName).name

readdirSync(pathModules).forEach((folder): void => {
  const pathRoute: string = join(pathModules, folder)

  readdirSync(pathRoute).forEach((fileName): void => {
    const cleanName = cleanFileName(fileName)

    if (cleanName.endsWith('routes')) {
      import(`${pathRoute}/${cleanName}`).then((moduleRouter): void => {
        routes.use(`/api/v1/${String(cleanName.split('.').shift())}`, moduleRouter.router)
      })
    }
  })
})

export { routes }
