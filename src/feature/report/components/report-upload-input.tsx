import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ReportUploadButton = () => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="report">レポートをアップロード</Label>
            <Input id="report" type="file" className="cursor-pointer" />
        </div>
    );
};

export default ReportUploadButton;