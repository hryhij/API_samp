var config = require('./dbconfig')
const sql = require('mssql')

async function getGroups() {
    try {
        let pool = await sql.connect(config)
        let vgroups = await pool.request()
            .query('select * from groups')
            
            return  vgroups.recordsets;
    
        // // Stored procedure
        
        // let result2 = await pool.request()
        //     .input('input_parameter', sql.Int, value)
        //     .output('output_parameter', sql.VarChar(50))
        //     .execute('procedure_name')
        
        // console.dir(result2)
        console.log("server connected")
    } catch (error) {
        console.log("ito ang errors7 : " + error)
    }
}

async function getGroups_HYBE() {
    try {
        let pool = await sql.connect(config)
        let vgroups = await pool.request()
            .query('select * from groups where CompanyID="1"')
            
            return  vgroups.recordsets;
    
        // // Stored procedure
        
        // let result2 = await pool.request()
        //     .input('input_parameter', sql.Int, value)
        //     .output('output_parameter', sql.VarChar(50))
        //     .execute('procedure_name')
        
        // console.dir(result2)
        console.log("server connected")
    } catch (error) {
        console.log("ito ang errors7 : " + error)
    }
}

module.exports = {getGroups : getGroups, getGroups_HYBE:getGroups_HYBE}

