export default {
    /* this mixins is responsible for concatinating error messages from vform and vee-validate  */
    methods: {
        /* errorBag is relataed to veeValidate config name*/
        /* form is related to vform - removed not used */
        /* this.$page.errors is related to session errors return by laravel */
        errorMessages(field) {
            if (this.$page.errors[field]) {
                return this.errors
                    .collect(field)
                    .concat(this.$page.errors[field]);
            }
            return this.errors.collect(field);
        },
        hasErrors(field) {
            let errors = this.errors
                .collect(field)
                .concat(this.form.errors.only(field));
            if (errors.length > 0) {
                return true;
            }
            return false;
        },
    },
};
