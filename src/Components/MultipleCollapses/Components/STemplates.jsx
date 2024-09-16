import React from 'react'
import { Link } from "react-router-dom"; 
const STemplates = () => {
    return (
        <>
            <div className="swan-grid-container swan-mb-7">
                <div className="swan-row">
                    <div className="swan-col-12">
                        <h2 className="swan-heading swan-text-x3large swan-pt-9 swan-pb-8 swan-mb-3 swan-font-weight-bold">
                            Product Specs &amp; Templates
                        </h2>
                    </div>
                </div>
                <div className="swan-visible-xs">
                    <div className="swan-row swan-mb-5">
                        <div className="swan-col-12">
                            <span className="swan-visually-hidden">
                                <label htmlFor="design-specs-Orientation">Orientation</label>
                            </span>
                            <div className="swan-vanilla-ignore swan-dropdown-with-floating-label swan-dropdown-with-floating-label-full-width">
                                <label
                                    className="swan-dropdown-floating-label"
                                    htmlFor="design-specs-Orientation-mobile"
                                >
                                    Orientation
                                </label>
                                <select
                                    id="design-specs-Orientation-mobile"
                                    className="swan-dropdown"
                                >
                                    <option value="Horizontal" label="Horizontal">
                                        Horizontal
                                    </option>
                                    <option value="Vertical" label="Vertical">
                                        Vertical
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="swan-row swan-mb-5">
                        <div className="swan-col-12">
                            <span className="swan-visually-hidden">
                                <label htmlFor="design-specs-Corners">Corners</label>
                            </span>
                            <div className="swan-vanilla-ignore swan-dropdown-with-floating-label swan-dropdown-with-floating-label-full-width">
                                <label
                                    className="swan-dropdown-floating-label"
                                    htmlFor="design-specs-Corners-mobile"
                                >
                                    Corners
                                </label>
                                <select id="design-specs-Corners-mobile" className="swan-dropdown">
                                    <option value="Standard Corners" label="Standard">
                                        Standard
                                    </option>
                                    <option value="Rounded Corners" label="Rounded">
                                        Rounded
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="swan-row swan-mb-5">
                        <div className="swan-col-12">
                            <span className="swan-visually-hidden">
                                <label htmlFor="design-specs-Shape">Shape</label>
                            </span>
                            <div className="swan-vanilla-ignore swan-dropdown-with-floating-label swan-dropdown-with-floating-label-full-width">
                                <label
                                    className="swan-dropdown-floating-label"
                                    htmlFor="design-specs-Shape-mobile"
                                >
                                    Shape
                                </label>
                                <select id="design-specs-Shape-mobile" className="swan-dropdown">
                                    <option value="Standard" label="Standard">
                                        Standard
                                    </option>
                                    <option value="Square" label="Square">
                                        Square
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swan-row swan-bgc-strong">
                    <div className="swan-col-8 swan-col-vertically-center">
                        <div className="swan-row swan-my-5">
                            <div className="swan-col-7 swan-col-sm-12 swan-col-vertically-center">
                                <div className="">
                                    <div
                                        className="design-specs-image-container swan-display-flex"
                                        style={{ justifyContent: "space-around" }}
                                    >
                                        <img
                                            src="https://rendering.documents.cimpress.io:443/preview?width=980&instructions_uri=https%3a%2f%2fuds.documents.cimpress.io%3a443%2fv2%2ftransient%2fprdSpecSvc%3fdocument%3djZHNboMwEIRfJdpTKwUwkLSUWy6Rem3UU9WDMUvYymBkmzQ%252fyrt3DUml3ipkYb6dHWbtCxzQOjI9lJDFApZQGzV22HsoL%252bBG20iFDsqPC%252fSyQ1ZtreHiEr6p9i1%252fv8Tpc6Y6Ji3SvuU%252bWMf504w8Hv3GopwdBuPIT%252f%252b6wJF1YtKcfnf%252fsLwyM5bOnEHqjaZ9P2cFxS%252b03MLzeFJ%252fix3VtcZbni2hrudADdvs6BzGyrLFEMYKaCs70iHWxpLUN7jzJx2EvbHdBBXD2X4nG1yEMSeqjWVm99VDJsQyEzmv1SNcP6dnNnvD6SyMPb1bzerW%252b8GVSRJqLr5fgYsVdYNF52IyySFN7L2N0CVC5lXaVDIqGvkUrXJMo0LlGEmRFnKNVZGuRTKMlSbXYs3RBmu%252bUIULeK2h7Eetrz8%253d%26type%3dpreview&scene=https%3a%2f%2fscenes.documents.cimpress.io%3a443%2fv3%2ftransient%3fdata%3dlZJPSwMxEMW%252fSpmTQoTd%252flm3e2yhKmK1VAQRD9lN6saNSUkmlrX0uztZEStYxUMO8%252fLySzLztrBRAmsoxnnCwNd2MwtaT7SUAgp0QTJYOytChVBswTcBCpheXJ1kWbaYXyb3wKJ4x53ipZY%252bmpah9Og4SrKeaet9S6apNUZWKEVvyp0gH8ytkbQxU0b5%252bque8KrxSkQUTDQ3DWnLmq8jbYncCDre8ZyRzu%252bJvU%252bJwW2tqsZI77%252bfufn4SO%252faKWmQo7KGDOfWqTdLtSbLInCDClvSRwnsdgw0b7t7HraAbfcK%252byodqfHnNrgqSujUS6zR2UbGHlRWW0cb7qk8Gg5YmuWs3x8ek0dYxNjbFdde0gW%252fYctuDIe4BGQ5y%252f8L9XwlDzLT4Yilo4TWYJ8bg%252fAHtgp4kJqwbMzS08EPT33s8vVM0eimYSh8u3c%253d"
                                            className="design-specs-image swan-fluid-image swan-p-7"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="swan-col-5 swan-col-sm-12 swan-col-vertically-center">
                                <div className="swan-row swan-mb-3">
                                    <div className="swan-col-6 swan-col-xs-4 swan-col-sm-4">
                                        <p className="swan-text-small swan-font-weight-bold swan-mt-0 swan-mb-3">
                                            Full Bleed Size
                                        </p>
                                    </div>
                                    <div className="swan-col-6 swan-col-xs-8 swan-col-sm-8">
                                        <div
                                            className="swan-display-flex"
                                            style={{ flexFlow: "column wrap" }}
                                        >
                                            <p className="swan-text-small swan-my-0">3.61" x 2.11"</p>
                                            <p className="swan-text-small swan-my-0">91.72 x 53.62 mm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swan-row swan-mb-3">
                                    <div className="swan-col-6 swan-col-xs-4 swan-col-sm-4">
                                        <p className="swan-text-small swan-font-weight-bold swan-mt-0 swan-mb-3">
                                            Document Trim Size
                                        </p>
                                    </div>
                                    <div className="swan-col-6 swan-col-xs-8 swan-col-sm-8">
                                        <div
                                            className="swan-display-flex"
                                            style={{ flexFlow: "column wrap" }}
                                        >
                                            <p className="swan-text-small swan-my-0">3.5" x 2"</p>
                                            <p className="swan-text-small swan-my-0">88.9 x 50.8 mm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swan-row swan-mb-3">
                                    <div className="swan-col-6 swan-col-xs-4 swan-col-sm-4">
                                        <p className="swan-text-small swan-font-weight-bold swan-mt-0 swan-mb-3">
                                            Safety Area
                                        </p>
                                    </div>
                                    <div className="swan-col-6 swan-col-xs-8 swan-col-sm-8">
                                        <div
                                            className="swan-display-flex"
                                            style={{ flexFlow: "column wrap" }}
                                        >
                                            <p className="swan-text-small swan-my-0">3.38" x 1.88"</p>
                                            <p className="swan-text-small swan-my-0">85.9 x 47.8 mm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swan-col-4 swan-bgc-standard swan-pl-6">
                        <div className="swan-hidden-xs">
                            <div className="swan-row swan-mb-5">
                                <div className="swan-col-12">
                                    <span className="swan-visually-hidden">
                                        <label htmlFor="design-specs-Orientation">Orientation</label>
                                    </span>
                                    <div className="swan-vanilla-ignore swan-dropdown-with-floating-label swan-dropdown-with-floating-label-full-width">
                                        <label
                                            className="swan-dropdown-floating-label"
                                            htmlFor="design-specs-Orientation-desktop"
                                        >
                                            Orientation
                                        </label>
                                        <select
                                            id="design-specs-Orientation-desktop"
                                            className="swan-dropdown px-3 ms-2"
                                        >
                                            <option value="Horizontal" label="Horizontal">
                                                Horizontal
                                            </option>
                                            <option value="Vertical" label="Vertical">
                                                Vertical
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="swan-row swan-mb-5">
                                <div className="swan-col-12">
                                    <span className="swan-visually-hidden">
                                        <label htmlFor="design-specs-Corners">Corners</label>
                                    </span>
                                    <div className="swan-vanilla-ignore swan-dropdown-with-floating-label swan-dropdown-with-floating-label-full-width">
                                        <label
                                            className="swan-dropdown-floating-label"
                                            htmlFor="design-specs-Corners-desktop"
                                        >
                                            Corners
                                        </label>
                                        <select
                                            id="design-specs-Corners-desktop"
                                            className="swan-dropdown px-3 ms-2"
                                        >
                                            <option value="Standard Corners" label="Standard">
                                                Standard
                                            </option>
                                            <option value="Rounded Corners" label="Rounded">
                                                Rounded
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="swan-row swan-mb-5">
                                <div className="swan-col-12">
                                    <span className="swan-visually-hidden">
                                        <label htmlFor="design-specs-Shape">Shape</label>
                                    </span>
                                    <div className="swan-vanilla-ignore swan-dropdown-with-floating-label swan-dropdown-with-floating-label-full-width">
                                        <label
                                            className="swan-dropdown-floating-label"
                                            htmlFor="design-specs-Shape-desktop"
                                        >
                                            Shape
                                        </label>
                                        <select id="design-specs-Shape-desktop" className="swan-dropdown px-3 ms-2">
                                            <option value="Standard" label="Standard">
                                                Standard
                                            </option>
                                            <option value="Square" label="Square">
                                                Square
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swan-row">
                            <div className="swan-col-12">
                                <p className="swan-text-small">
                                    To avoid white edges, extend your design to the full bleed size –
                                    but keep text and images within the safety area. Remember to remove
                                    all die lines from your template to avoid them being printed
                                    alongside your design.
                                </p>
                            </div>
                        </div>
                        <div className="swan-row">
                            <div className="swan-col-12">
                                <div className="swan-display-flex" style={{ flexFlow: "wrap" }}>
                                    <div className="swan-text-small swan-mr-3">
                                        Create your print-ready file.
                                    </div>
                                    <div className="swan-text-small swan-mb-3">
                                        Download the template.
                                    </div>
                                </div>
                                <div className="swan-text-small">
                                    <div className="swan-display-flex" style={{ flexFlow: "wrap" }}>
                                        <Link
                                            to="https://s3.eu-west-1.amazonaws.com/prepress.cimpress.io-scratch-eu-west-1/bd816a90-7e78-49e7-a4ef-1cc29d5472c4"
                                            to="https://s3.eu-west-1.amazonaws.com/prepress.cimpress.io-scratch-eu-west-1/bd816a90-7e78-49e7-a4ef-1cc29d5472c4"
                                            className="swan-button swan-button-skin-secondary swan-mr-5 swan-mb-5 swan-link"
                                        >
                                            PDF
                                        </Link>
                                        <Link
                                            to="https://ct-products-document-bucket.s3.eu-west-1.amazonaws.com/svg-zip-ea2414e8-be62-4ba0-890b-ff3b50e9282306637c3b619eab3683a59911b4f3f7bb69bd2cc21c0c3b6aee2f5f6554bc9281.zip?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCWV1LXdlc3QtMSJHMEUCIDHleOIceQms%2Bru0KANlOPGhSCU%2BFCaTlJpqHSvXStSeAiEAyFNq3c5wjDvCKqpqWAYRsqLuP7VsgKODS6fObGF9Q3AqgAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw5NzY4NTkxNzY2OTEiDDMgaAexogCWc8DBgCrUA3Zrasz8n5clOnCoFOmxFLyGD80xm5eWCD%2FLAU0VDMvsJeq89VeX6SEcSSn5OVJbDF8Yk6H9eqYQ8bXbUA%2Bdh%2FIhFA6S5e0xliS%2Bx33j1vCD2mJ1SekfGvuriDhWPiWL48ZkEI%2FxiQu4cuVpvXeYGU7n36sG8k%2FcRNOMQ%2BG7cf1T32WsXcfjaq%2B2CYwVsYgjXBCw23OP2y49RwPJZ%2Fv4%2BvermjwikQyozpUzw4EDjRl2tFE5xrk%2FBjI5uQy3MUB%2Fsc8DhftBZUCYr9EEjjFBGPK5Qnvr9B660vv%2Btt8NLNiS9gf2dwJSNbMw%2BXJkbA9IMXpOA%2B9y7SiBHv6nCk41ZAtBCoez8OpFbuYGSzMwJgTBdhenIS3iVc4yusIsaBAf3MABL7WF1jB7y2v%2BROcPkWD0bJ0O%2Fbz1rYh5JVtNe6nAJnvf2YmQhVl0VxYx%2FlCAYxgSMLJ035lAq7RLfmpd8ccnjU2IeUH7TuqnXfx%2B4p1fbTznYxpmjTTrAz%2B6UXfYJybamECM3irpSjIy5bIPvpIrdY3y7pn9F7h16mED72iqvvxG6JOV9DCOg9gD1SCrtT4uCvIC9ib0Jks76yaQ10xnbQEUEUN0830avn%2BmCctmcMsuSjDMksi1BjqlAfk9ZBADWVsI5ZZICo%2FRSWJ6KcG6KJzfpZVupOVlta3XMhVUnAGTKDrRRrg%2FJ7kCwcR4yOJ6l%2FYNGtDZ4WukJ9bUDcQKkyStSB10Dyc9G5GTm%2FsMqGActR7ji2%2BtVXP%2FPdEsvrc6edUqchyIlYVTHaJaJfmhejQEfnJSV%2FMzzjyR6O%2BsLwDVEj%2FGX4c5nGt374fsTnYyFZEBuaw%2Bdjz0xowyngAwQw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240806T115223Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA6G4KYD3ZU5CTLIVU%2F20240806%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=813f8693b8c083013e048c1ce6ee099590be9ef97c86c4471556824d52577840"
                                            to="https://ct-products-document-bucket.s3.eu-west-1.amazonaws.com/svg-zip-ea2414e8-be62-4ba0-890b-ff3b50e9282306637c3b619eab3683a59911b4f3f7bb69bd2cc21c0c3b6aee2f5f6554bc9281.zip?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCWV1LXdlc3QtMSJHMEUCIDHleOIceQms%2Bru0KANlOPGhSCU%2BFCaTlJpqHSvXStSeAiEAyFNq3c5wjDvCKqpqWAYRsqLuP7VsgKODS6fObGF9Q3AqgAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgw5NzY4NTkxNzY2OTEiDDMgaAexogCWc8DBgCrUA3Zrasz8n5clOnCoFOmxFLyGD80xm5eWCD%2FLAU0VDMvsJeq89VeX6SEcSSn5OVJbDF8Yk6H9eqYQ8bXbUA%2Bdh%2FIhFA6S5e0xliS%2Bx33j1vCD2mJ1SekfGvuriDhWPiWL48ZkEI%2FxiQu4cuVpvXeYGU7n36sG8k%2FcRNOMQ%2BG7cf1T32WsXcfjaq%2B2CYwVsYgjXBCw23OP2y49RwPJZ%2Fv4%2BvermjwikQyozpUzw4EDjRl2tFE5xrk%2FBjI5uQy3MUB%2Fsc8DhftBZUCYr9EEjjFBGPK5Qnvr9B660vv%2Btt8NLNiS9gf2dwJSNbMw%2BXJkbA9IMXpOA%2B9y7SiBHv6nCk41ZAtBCoez8OpFbuYGSzMwJgTBdhenIS3iVc4yusIsaBAf3MABL7WF1jB7y2v%2BROcPkWD0bJ0O%2Fbz1rYh5JVtNe6nAJnvf2YmQhVl0VxYx%2FlCAYxgSMLJ035lAq7RLfmpd8ccnjU2IeUH7TuqnXfx%2B4p1fbTznYxpmjTTrAz%2B6UXfYJybamECM3irpSjIy5bIPvpIrdY3y7pn9F7h16mED72iqvvxG6JOV9DCOg9gD1SCrtT4uCvIC9ib0Jks76yaQ10xnbQEUEUN0830avn%2BmCctmcMsuSjDMksi1BjqlAfk9ZBADWVsI5ZZICo%2FRSWJ6KcG6KJzfpZVupOVlta3XMhVUnAGTKDrRRrg%2FJ7kCwcR4yOJ6l%2FYNGtDZ4WukJ9bUDcQKkyStSB10Dyc9G5GTm%2FsMqGActR7ji2%2BtVXP%2FPdEsvrc6edUqchyIlYVTHaJaJfmhejQEfnJSV%2FMzzjyR6O%2BsLwDVEj%2FGX4c5nGt374fsTnYyFZEBuaw%2Bdjz0xowyngAwQw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240806T115223Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA6G4KYD3ZU5CTLIVU%2F20240806%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=813f8693b8c083013e048c1ce6ee099590be9ef97c86c4471556824d52577840"
                                            className="swan-button swan-button-skin-secondary swan-mr-5 swan-mb-5 swan-link"
                                        >
                                            SVG
                                        </Link>
                                        <Link
                                            to="https://uploads.documents.cimpress.io/v1/uploads/dcaae213-fd76-45f9-a775-adb0bcfb882b~100?tenant=surface-ninjas&extension=ai"
                                            to="https://uploads.documents.cimpress.io/v1/uploads/dcaae213-fd76-45f9-a775-adb0bcfb882b~100?tenant=surface-ninjas&extension=ai"
                                            className="swan-button swan-button-skin-secondary swan-mb-5 swan-link"
                                        >
                                            Adobe Illustrator (.ai)
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default STemplates;