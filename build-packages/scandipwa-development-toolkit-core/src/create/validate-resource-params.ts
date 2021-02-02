const componentValidator = (
    { containerFeatures }: ComponentResourceParams,
) => {
    const errors: Error[] = [];

    if (!Array.isArray(containerFeatures)) {
        errors.push(new Error(
            `Container features should be supplied as an array, ${typeof containerFeatures} has been supplied instead.`
        ));
    }

    return errors;
};


const storeValidator = (
    { dispatcherType }: StoreResourceParams,
) => {
    const errors: Error[] = [];

    if (!dispatcherType) {
        errors.push(new Error(
            `Dispatcher type has not been supplied. It should have been even if a dispatcher has not been requested.`
        ));
    }

    return errors;
}

const noopValidator = () => [] as Error[];

const validatorMap = {
    [ResourceType.Component]: componentValidator,
    [ResourceType.Route]: componentValidator,
    [ResourceType.Store]: storeValidator,
    [ResourceType.Query]: noopValidator
}

const validateResourceParams = (resourceName: string, resourceType: ResourceType, resourceParams: ResourceParams) => {
    const validator = validatorMap[resourceType];
    const errors: Error[] = validator(resourceParams as any);

    // Ensure proper name
    if (!resourceName) {
        errors.push(new Error(
            'Resource name has not been supplied.'
        ));
    }

    return errors;
}

export default validateResourceParams;