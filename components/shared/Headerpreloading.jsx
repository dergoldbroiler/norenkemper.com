import { Headlines } from "../Pages/Homepage/Headlines";

/**
 * Shown at first for layout reasons.
 * @description Is the first element to show on the website. It is unloaded after 1200 ms
 */

export const Headerpreloading = () => {
    return (
       <Headlines textColor="#000" classes="animation"/>     
    )
}