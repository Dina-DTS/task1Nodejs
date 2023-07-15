

const fs = require("fs")


const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData()
  const dublicate = allData.filter((obj) => {
    return obj.id === id

  }
  )


  console.log(dublicate)
  if (dublicate.length == 0) {

    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    })

    saveAllData(allData)

  } else {
    console.log("error The id is Dublicated")
  }
}


/////////////////////////////////////////////////////////////////
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
  } catch {
    return []
  }

}
///////////////////////////////////////////////////////////////////

const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData)
  fs.writeFileSync("data10.json", saveAllDataJson)
}
//////////////////////////////////////////////////////////////////

const deleteDate = () => {
  const allData = loadData()
  const dataKeep = allData.filter((obj) => {
    return (obj.id != 4 && obj.id != 6)
  })

  saveAllData(dataKeep)
  console.log("delete")

}

///////////////////////////////////////////////////////////////////////

const listData = () => {
  const allData = loadData()

  allData.forEach((obj) => {
    console.log(obj.fname, obj.lname, obj.city)
  })
}

///////////////////////////////////////////////////////////

const readData = () => {
  const allData = loadData()

  const itemNeeded = allData.find((obj) => {
    return obj.id === 5
  })
  console.log(itemNeeded)

}

module.exports = {
  addPerson,
  deleteDate,
  listData,
  readData
}
