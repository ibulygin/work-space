type ConditionCssClasses = {
    className: string;
    isUsing: boolean;
};
type CssClasses = Array<string | ConditionCssClasses>;

/**
 * @param {classNames: CssClasses}
 * @return {string}
 */
const getCssClasses = (classNames: CssClasses): string =>
    classNames
        .map((cssClass) => {
            if (typeof cssClass === 'string') {
                return cssClass;
            } else {
                const {className, isUsing} = cssClass;

                return isUsing ? className : '';
            }
        })
        .join(' ');

export {getCssClasses};
