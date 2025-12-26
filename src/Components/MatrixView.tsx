import type { MatrixViewInterface } from "../typescript/interface";
// import type { Matrix } from "../typescript/type";

// interface MatrixView{
//     title: string;
//     matrix:Matrix
// }

const MatrixView = ({ title, matrix, }:MatrixViewInterface) => {

    if (matrix.length === 0) return ;

    
    return (
        <div className="bg-slate-50 rounded-xl p-4 shadow-sm">
            <h4 className="text-center font-semibold mb-3">{title}</h4>

            <div className="space-y-2">
                {matrix.map((row, i) => (
                    <div key={i} className="flex justify-center gap-2">
                        {row.map((cell, j) => (
                            <div
                                key={j}
                                className="w-10 h-10 flex items-center justify-center 
                                bg-white border rounded-md font-medium"
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatrixView;