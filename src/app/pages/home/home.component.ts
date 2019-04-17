/**
 * Created by prachi sharma
 */
import {OnInit, Component} from "@angular/core";
import {RestService} from '../../shared';
import { first } from 'rxjs/operators';


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public customers: any[] = [
      {
      'customer': 'Alpegru Retail Properties Ltd',
      'arr': 240779,
      'assets': ['Oracle Weblogic', 'Demand Classification', 'JDA Collaborate',
                  'JDA Demand', 'JDA Fulfillment', 'JDA Market Manager', 'JDA Monitor', 'JDA Order Optimization', 'JDA Platform'],
      'industry': 'Retail',
      'theatre': 'EMEA',
      'is_cloud': 'N',
      'chs': 73
     },
      {
        'customer': 'BrassCraft Manufacturing Co',
        'arr': '',
        'assets': [
          'Demand Planning/Ext. Edition',
          'Fulfillment - Deployment',
          'Fulfillment - Material Alloc',
          'Fulfillment - Material Plan',
          'Fulfillment - Production',
          'JDA Collaborate',
          'JDA Demand',
          'JDA Fulfillment',
          'JDA Market Manager',
          'JDA Platform'
        ],
        'theatre': 'NA MFG',
        'industry': 'Manufacturing',
        'is_cloud': 'N',
        'chs': 98,
        'class': 'class B'
      },
      {
        'customer': 'ABC Fine Wine & Spirits',
        'arr': '19258',
        'assets': [
          'AWR - Deal/Forward Buy GS',
          'AWR - Events GS',
          'AWR - Order Analysis GS',
          'AWR - Order Expedite Management GS',
          'AWR - Plans GS',
          'AWR - Projections GS',
          'AWR - Truck Split GS',
          'JDA Advanced Warehouse Replenishment GS'
        ],
        'theatre': 'NA Retail',
        'industry': 'Retail',
        'is_cloud': 'N',
        'chs': 92,
        'class': 'class B'
      },
      {
        'customer': 'ABM REXEL',
        'arr': '11676',
        'assets': [
          'AWR - Allocation CS',
          'AWR - Booking CS',
          'AWR - Calendar CS',
          'AWR - Deal/Forward Buy CS',
          'AWR - Events CS',
          'AWR - Export Reports to Excel CS',
          'AWR - Multi-Tier CS',
          'AWR - Online Forward Buy CS',
          'AWR - Order Analysis CS',
          'AWR - Order Expedite Management CS',
          'AWR - Overstock Transfer CS',
          'AWR - Plans CS',
          'AWR - Projections CS',
          'AWR - Security CS',
          'JDA Advanced Warehouse Replenishment Client Server'
        ],
        'theatre': 'EMEA',
        'industry': 'Wholesale/Distribution',
        'is_cloud': 'N',
        'chs': 58,
        'class': 'class A'
      },
      {
        'customer': 'Adtran Inc - US',
        'arr': '67096',
        'assets': [
          'Oracle Weblogic',
          'JDA Factory Planner',
          'JDA Manufacturing ABPP',
          'JDA Platform',
          'JDA Core Infrastructure Services (CIS)',
          'SCM UI'
        ],
        'theatre': 'NA MFG',
        'industry': 'Manufacturing',
        'is_cloud': 'N',
        'chs': 99,
        'class': 'class B'
      },
      {
        'customer': 'Apoteket AB',
        'arr': '70548',
        'assets': [
          'CKB - Web Publisher',
          'JDA Category Knowledge Base',
          'JDA Floor Planning Plus',
          'JDA Open Access Mobile',
          'JDA Planogram Converter',
          'JDA Space Planning Plus'
        ],
        'theatre': 'EMEA',
        'industry': 'Retail',
        'is_cloud': 'N',
        'chs': 91,
        'class': 'class B'
      },
      {
        'customer': 'Atlanta Dental Supply, Inc.',
        'arr': '19395',
        'assets': [
          'AWR - Booking GS',
          'AWR - Deal/Forward Buy GS',
          'AWR - Non-Stock GS',
          'AWR - Plans GS',
          'AWR - Projections GS',
          'JDA Advanced Warehouse Replenishment GS'
        ],
        'theatre': 'NA MFG',
        'industry': 'Wholesale/Distribution',
        'is_cloud': 'N',
        'chs': 92,
        'class': 'class B'
      }
    ];
    public predictions: any;
    constructor(public restService: RestService) { }

    ngOnInit() {

    }

    getPredictions(selectedCustomer) {
      this.restService.get_prediction(selectedCustomer.customer, selectedCustomer.arr, selectedCustomer.assets, selectedCustomer.industry, selectedCustomer.theatre, selectedCustomer.is_cloud, selectedCustomer.chs)
        .pipe(first())
        .subscribe(
          data => {
            this.predictions = data;
          },
          error => {
          });

    }
}
