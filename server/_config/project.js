const PROJECT_PATH =  __dirname.split('_config')[0]
const QUARKS_PATH = PROJECT_PATH + '/_quarks/'
const ATOMS_PATH = PROJECT_PATH + '/_atoms/'
const FACTORIES_PATH = PROJECT_PATH + '/_factories/'
const ORGANISM_FACTORY = FACTORIES_PATH + 'organism'
const MOLECULE_FACTORY = FACTORIES_PATH + 'molecule.mongoose'

module.exports = {
  PROJECT_PATH,
  QUARKS_PATH,
  ATOMS_PATH,
  FACTORIES_PATH,
  ORGANISM_FACTORY,
  MOLECULE_FACTORY
}
