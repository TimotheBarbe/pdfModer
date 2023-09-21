import React, {PureComponent} from "react";
import {Button, Grid, TextField, WithStyles} from "@material-ui/core";
import {IImage, IImageOption, ImageFormat, IPdfInfo} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import AddIcon from '@material-ui/icons/Add';
import Dropzone from "react-dropzone";
import {getImageFormat} from "../../../utils/stringUtils";
import {loadFile} from "../../../utils/fileUtils";
import IconButton from "@material-ui/core/IconButton";
import Cancel from "@material-ui/icons/Cancel";
import {drawImage} from "../../../utils/pdfUtils";
import {setNumber} from "../../../utils/formUtils";

interface IPdfInsertImageProps extends WithStyles, IImageOption {
    pdf: IPdfInfo;
    image: IImage;

    load: (data: IPdfInfo) => void;
    setImageData: (data: Uint8Array) => void;
    setImageFormat: (data: ImageFormat) => void;
    setImageX: (data: number) => void;
    setImageY: (data: number) => void;
    setImageRotate: (data: number) => void;
    setImageScale: (data: number) => void;
}

export default class PdfInsertImage extends PureComponent<IPdfInsertImageProps> {

    private insert = () => {
        drawImage(this.props.pdf, this.props).then(this.props.load)
    }

    private clearImage = () => {
        // Do a reducer for that ?
        this.props.setImageFormat("empty");
        // this.props.setImageData(new Uint8Array(0));
    }

    private read = (files: File[]) => {
        const onload = (reader: FileReader) => {
            const binaryStr = reader.result
            if (binaryStr != null) {
                this.props.setImageData(new Uint8Array(binaryStr as ArrayBuffer))
                this.props.setImageFormat(getImageFormat(file.type))
            }
        }
        const [file] = files
        loadFile(onload, file)
    };

    public render() {
        const {
            classes, pdf, image, x, y, setImageX, setImageY, rotate, setImageRotate, scale, setImageScale
        } = this.props;
        const display = URL.createObjectURL(
            new Blob([image.data.buffer], {type: 'image/png'})
        );
        return (
            <Grid container={true} spacing={3}>
                {image.format === "empty" &&
                <Dropzone onDrop={acceptedFiles => this.read(acceptedFiles)} accept={[".jpg", ".jpeg", ".png"]}
                          multiple={false}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps({className: classes.dropzone})}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop an image (jpg or png), or click to select a file</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                }
                {image.format !== "empty" &&
                <React.Fragment>
                    <Grid item={true} xs={9}>
                        <img src={display} className={classes.img} alt={"pdf img to insert"}/>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <IconButton color={"inherit"} onClick={this.clearImage}><Cancel/></IconButton>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <TextField
                            label="Y"
                            type="number"
                            placeholder={"ex: 200"}
                            value={y}
                            onChange={setNumber(setImageY)}
                            InputLabelProps={{shrink: true}}
                            inputProps={{min: "0"}}
                        />
                    </Grid>
                    <Grid item={true} xs={6}>
                        <TextField
                            label="X"
                            type="number"
                            placeholder={"ex: 200"}
                            value={x}
                            onChange={setNumber(setImageX)}
                            InputLabelProps={{shrink: true}}
                            inputProps={{min: "0"}}
                        />
                    </Grid>
                    <Grid item={true} xs={6}>
                        <TextField
                            label="Rotate"
                            type="number"
                            placeholder={"ex: 200"}
                            value={rotate}
                            onChange={setNumber(setImageRotate)}
                            InputLabelProps={{shrink: true}}
                            inputProps={{min: "0"}}
                        />
                    </Grid>
                    <Grid item={true} xs={6}>
                        <TextField
                            label="Scale"
                            type="number"
                            placeholder={"ex: 0.2"}
                            value={scale}
                            onChange={setNumber(setImageScale)}
                            InputLabelProps={{shrink: true}}
                            inputProps={{min: 0, step: 0.1, max: 1}}
                        />
                    </Grid>
                </React.Fragment>
                }
                <Grid item={true} xs={6}>
                    <Button variant="outlined" color="primary" onClick={this.insert}
                            style={{margin: "0 10px 10px 0"}} disabled={isEmpty(pdf) || image.format === "empty"}
                            startIcon={<AddIcon/>}>
                        Draw image
                    </Button>
                </Grid>
            </Grid>
        )
    }
}