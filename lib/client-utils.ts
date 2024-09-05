export const resizeImage = async (file: File, width: number, height: number): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    // 1. Load the image from the file
    reader.onload = (event) => {
      const img = new Image()
      img.src = event.target?.result as string

      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (!ctx) {
          return reject(new Error('Failed to get canvas 2D context'))
        }

        // Calculate the aspect ratios of the image and the thumbnail
        const imgAspectRatio = img.width / img.height
        const thumbAspectRatio = width / height

        let sx = 0,
          sy = 0,
          swidth = img.width,
          sheight = img.height

        // 2. Check if the image is portrait or landscape
        if (imgAspectRatio > thumbAspectRatio) {
          // Landscape: Crop from the center horizontally
          swidth = sheight * thumbAspectRatio // Width should match the aspect ratio of the thumbnail
          sx = (img.width - swidth) / 2 // Start x from the center horizontally
        } else {
          // Portrait: Crop from the top
          sheight = swidth / thumbAspectRatio // Height should match the aspect ratio of the thumbnail
          sy = 0 // Start y at the top for portrait images
        }

        // 3. Set canvas size to the thumbnail size
        canvas.width = width
        canvas.height = height

        // 4. Draw the cropped part of the image onto the canvas
        ctx.drawImage(img, sx, sy, swidth, sheight, 0, 0, width, height)
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob)
            } else {
              reject(new Error('Canvas to Blob conversion failed'))
            }
          },
          'image/jpeg',
          0.8
        )
      }

      img.onerror = () => reject(new Error('Image loading failed'))
    }

    reader.onerror = () => reject(new Error('File reading failed'))

    // Start reading the file as a Data URL
    reader.readAsDataURL(file)
  })
}
