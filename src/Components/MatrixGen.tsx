import { useState } from "react";
import MatrixView from "./MatrixView";
import type { Matrix } from "../typescript/type";

const createLeftMatrix = (rows: number, cols: number): Matrix => {
    const arr: Matrix = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
            arr[i][j] = i + j;
        }
    }
    return arr;
};

const createRightMatrix = (rows: number, cols: number): Matrix => {
    const arr: Matrix = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
            arr[i][j] = i + j;
        }
    }
    return arr;
};

const addMatrix = (left: Matrix, right: Matrix): Matrix => {
    const result: Matrix = [];
    for (let i = 0; i < left.length; i++) {
        result.push([]);
        for (let j = 0; j < left[i].length; j++) {
            result[i][j] = left[i][j] + right[i][j];
        }
    }
    return result;
}


const MatrixGen = () => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    const [matrixLeft, setMatrixLeft] = useState<Matrix>([]);
    const [matrixRight, setMatrixRight] = useState<Matrix>([]);

    const [generated, setGenerated] = useState(false);
    const [result, setResult] = useState<Matrix>([]);
    const [added, setAdded] = useState(false);


    const handleGenerate = () => {
        if (rows <= 0 || cols <= 0) return;

        setMatrixLeft(createLeftMatrix(rows, cols));
        setMatrixRight(createRightMatrix(rows, cols));

        setGenerated(true);
        setAdded(false);
        setResult([]);

    };


    const handleAdd = () => {
        setResult(addMatrix(matrixLeft, matrixRight));
        setAdded(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-6">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-5xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Matrix CalCulator
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <input
                        type="number"
                        placeholder="Rows"
                        className="border rounded-lg px-4 py-2 w-full sm:w-32"
                        onChange={(e) => setRows(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Columns"
                        className="border rounded-lg px-4 py-2 w-full sm:w-32"
                        onChange={(e) => setCols(Number(e.target.value))}
                    />

                    <button
                        onClick={handleGenerate}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
                    >
                        Generate Matrix
                    </button>

                    {generated && (
                        <button
                            onClick={handleAdd}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
                        >
                            Add Matrix
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MatrixView title="Left Matrix" matrix={matrixLeft} />
                    <MatrixView title="Right Matrix" matrix={matrixRight} />
                    {added && <MatrixView title="After Sum" matrix={result} />}
                </div>
            </div>
        </div>
    );
};

export default MatrixGen;
