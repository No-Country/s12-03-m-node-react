import QRCODE from 'qrcode';

export const generateQRCode = async (text) => {
    try {
        const qrCode = await QRCODE.toDataURL(text);
        return qrCode;
    } catch (error) {
        console.log(error);
    }
}