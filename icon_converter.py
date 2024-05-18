from PIL import Image
import os

# List of icon sizes
icon_sizes = [
    (16, 16),
    (32, 32),
    (72, 72),
    (96, 96),
    (128, 128),
    (144, 144),
    (152, 152),
    (180, 180),
    (192, 192),
    (384, 384),
    (512, 512)
]

def resize_and_save(input_image_path, output_directory):
    # Load the input image
    img = Image.open(input_image_path)

    # Ensure the output directory exists
    os.makedirs(output_directory, exist_ok=True)

    # Process each size
    for size in icon_sizes:
        resized_img = img.resize(size, Image.LANCZOS)
        output_path = os.path.join(output_directory, f'icon-{size[0]}x{size[1]}.png')
        resized_img.save(output_path)
        print(f'Saved: {output_path}')

if __name__ == '__main__':
    # Input image path
    input_image_path = 'icon.png'  # Replace with your image path

    # Output directory to save resized images
    output_directory = 'public/icons'

    # Call the function
    resize_and_save(input_image_path, output_directory)
