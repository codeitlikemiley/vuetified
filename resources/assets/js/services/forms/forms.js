/**
 * Vuetified helper class. Used to set common properties on all forms.
 */
window.AppForm = function (data) {
    var form = this

    _.extend(this, data)

    /**
     * Create the form error helper instance.
     */
    this.errors = new AppFormErrors()

    this.busy = false
    this.successful = false

    /**
     * Start processing the form.
     */
    this.startProcessing = function () {
        form.errors.forget()
        form.busy = true
        form.successful = false
    }

    /**
     * Finish processing the form.
     */
    this.finishProcessing = function () {
        form.busy = false
        form.successful = true
    }

    /**
     * Reset the errors and other state for the form.
     */
    this.resetStatus = function () {
        form.errors.forget()
        form.busy = false
        form.successful = false
    }

    /**
     * Set the errors on the form.
     */
    this.setErrors = function (errors) {
        form.busy = false
        form.errors.set(errors)
    }
}
