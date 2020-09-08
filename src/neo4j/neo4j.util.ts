import neo4j, { Driver } from 'neo4j-driver'
import { Neo4jConfig } from '../neo4j-config.interface'

export const createDriver = async (config: Neo4jConfig) => {
    // const driver: Driver = neo4j.driver(
    //     `${config.scheme}://${config.host}:${config.port}`,
    //     neo4j.auth.basic(config.username, config.password)
    // );
    const driver: Driver = neo4j.driver(
        'bolt://35.175.135.149:33002',
        neo4j.auth.basic('neo4j', 'wrecks-detents-success')
    );
    await driver.verifyConnectivity()

    return driver;
}