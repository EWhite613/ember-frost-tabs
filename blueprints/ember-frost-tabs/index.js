const blueprintHelper = require('ember-frost-core/blueprint-helper')

module.exports = {
  description: '',
  normalizeEntityName: function () {},

  afterInstall: function (options) {
    const addonsToAdd = [
      {name: 'ember-frost-core', target: '1.23.10'},
      {name: 'ember-simple-uuid', target: '0.1.4'}
    ]

    // Get the packages installed in the consumer app/addon. Packages that are already installed in the consumer within
    // the required semver range will not be re-installed or have blueprints re-run.
    const consumerPackages = blueprintHelper.consumer.getPackages(options)

    // Get the packages to install (not already installed) from a list of potential packages
    return blueprintHelper.packageHandler.getPkgsToInstall(addonsToAdd, consumerPackages).then((pkgsToInstall) => {
      if (pkgsToInstall.length !== 0) {
        // Call the blueprint hook
        return this.addAddonsToProject({
          packages: pkgsToInstall
        })
      }
    })
  }
}
