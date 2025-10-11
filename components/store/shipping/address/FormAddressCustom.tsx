import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function FormAddressCustom() {
  return (
    <div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-red-500">استان*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب استان" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tehran">تهران</SelectItem>
                <SelectItem value="isfahan">اصفهان</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-red-500">شهر*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب شهر" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tehran">تهران</SelectItem>
                <SelectItem value="karaj">کرج</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-red-500">آدرس*</Label>
          <Textarea
            placeholder="مثال: خیابان، کوچه و جزئیات آدرس"
            className="resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            در صورت تغییر این بخش و ناهماهنگی آن با موقعیت مکانی، ممکن است ارسال
            سفارش با مشکل مواجه شود.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-red-500">پلاک*</Label>
            <Input placeholder="شماره پلاک" />
          </div>
          <div>
            <Label>واحد</Label>
            <Input placeholder="شماره واحد" />
          </div>
        </div>

        <div>
          <Label className="text-red-500">کدپستی*</Label>
          <Input placeholder="باید ۱۰ رقمی باشد" />
        </div>
      </form>
    </div>
  );
}
