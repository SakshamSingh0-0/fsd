/**
 * imageRotation.js
 *
 * Utility to rotate an image by a given degree value.
 * Exports:
 *   - rotateImage(source, degrees, opts) -> Promise<HTMLCanvasElement | string>
 *   - setImageRotationCss(imgElement, degrees)
 *
 * source: HTMLImageElement | string (URL/dataURL)
 * degrees: number (clockwise degrees)
 * opts:
 *   - background: CSS color used to fill behind image (default: transparent)
 *   - returnType: 'canvas' | 'dataURL' (default: 'canvas')
 *   - quality: for dataURL when type 'image/jpeg' (0..1)
 *
 * Example:
 *   import { rotateImage, setImageRotationCss } from './imageRotation.js'
 *   const canvas = await rotateImage('/img/photo.jpg', 45)
 *   document.body.appendChild(canvas)
 *
 *   // Or for CSS transform
 *   setImageRotationCss(document.querySelector('img'), 90)
 */

function _loadImage(source) {
    return new Promise((resolve, reject) => {
        if (!source) return reject(new Error('No image source provided'))
        if (source instanceof HTMLImageElement) {
            if (source.complete && source.naturalWidth) return resolve(source)
            source.addEventListener('load', () => resolve(source), { once: true })
            source.addEventListener('error', (e) => reject(e), { once: true })
            return
        }
        const img = new Image()
        img.crossOrigin = 'anonymous' // allow CORS-safe operations
        img.onload = () => resolve(img)
        img.onerror = (e) => reject(e)
        img.src = source
    })
}

/**
 * Rotate image and return a Canvas (or dataURL).
 * @param {HTMLImageElement|string} source
 * @param {number} degrees - clockwise degrees
 * @param {object} opts
 * @returns {Promise<HTMLCanvasElement|string>}
 */
export async function rotateImage(source, degrees = 0, opts = {}) {
    const { background = 'transparent', returnType = 'canvas', quality = 0.92, mime = 'image/png' } = opts
    const img = await _loadImage(source)
    const w = img.naturalWidth || img.width
    const h = img.naturalHeight || img.height
    const rad = (degrees % 360) * Math.PI / 180

    // calculate bounding box of rotated rectangle
    const cos = Math.abs(Math.cos(rad))
    const sin = Math.abs(Math.sin(rad))
    const newW = Math.ceil(w * cos + h * sin)
    const newH = Math.ceil(w * sin + h * cos)

    const canvas = document.createElement('canvas')
    canvas.width = newW
    canvas.height = newH
    const ctx = canvas.getContext('2d')
    // fill background if requested
    if (background !== 'transparent') {
        ctx.fillStyle = background
        ctx.fillRect(0, 0, newW, newH)
    } else {
        // clear to transparent explicitly
        ctx.clearRect(0, 0, newW, newH)
    }

    // move origin to center and rotate
    ctx.translate(newW / 2, newH / 2)
    ctx.rotate(rad)
    // draw the image centered
    ctx.drawImage(img, -w / 2, -h / 2, w, h)

    if (returnType === 'canvas') return canvas
    // return dataURL
    if (mime === 'image/jpeg') {
        return canvas.toDataURL(mime, quality)
    }
    return canvas.toDataURL(mime)
}

/**
 * Apply a CSS rotation transform to an <img> element (visual only).
 * @param {HTMLImageElement} imgElement
 * @param {number} degrees
 */
export function setImageRotationCss(imgElement, degrees = 0) {
    if (!(imgElement instanceof HTMLElement)) return
    imgElement.style.transformOrigin = '50% 50%'
    imgElement.style.transform = `rotate(${degrees}deg)`
    // ensure smooth rendering on some browsers
    imgElement.style.willChange = 'transform'
}