import neo4j, { Driver } from 'neo4j-driver'
import { Neo4jConfig } from '../neo4j-config.interface'

export const createDriver = async (config: Neo4jConfig) => {
    console.log('chamei Neo4j')
    console.log(config.scheme)
    console.log(config.host)
    console.log(config.port)
    console.log(config.username)
    console.log(config.password );
    const driver: Driver = neo4j.driver(
        `${config.scheme}://${config.host}:${config.port}`,
        neo4j.auth.basic(config.username, config.password)
    );
    // const driver: Driver = neo4j.driver(
    //     'bolt://54.82.216.90:33519',
    //     neo4j.auth.basic('neo4j', 'emergency-petroleum-term')
    // );
    await driver.verifyConnectivity()

    return driver;
}