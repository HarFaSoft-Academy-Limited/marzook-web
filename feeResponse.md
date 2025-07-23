##Sections
{
    "success": true,
    "message": "Sections retrieved successfully.",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 6,
                "name": "Primary Section",
                "description": "Primary education section for grades 1-6",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 7,
                "name": "Junior Secondary Section",
                "description": "Junior secondary education section for grades 7-9",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 8,
                "name": "Senior Secondary Section",
                "description": "Senior secondary education section for grades 10-12",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 9,
                "name": "Science Section",
                "description": "Science-focused section for advanced studies",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 10,
                "name": "Arts Section",
                "description": "Arts and humanities focused section",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 11,
                "name": "Commercial Section",
                "description": "Business and commerce focused section",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 1,
                "name": "Nursery",
                "description": "Nursery Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            },
            {
                "id": 2,
                "name": "Primary",
                "description": "Primary Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            },
            {
                "id": 3,
                "name": "Secondary",
                "description": "Secondary Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            },
            {
                "id": 4,
                "name": "Islamiyah",
                "description": "Islamiyah Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            },
            {
                "id": 5,
                "name": "Tahfeez",
                "description": "Tahfeez Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            }
        ],
        "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/sections?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/sections?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/sections?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "https://api.harfasoftacademy.com.ng/api/v1/sections",
        "per_page": 15,
        "prev_page_url": null,
        "to": 11,
        "total": 11
    }
}

## classes 
{
    "message": "Classes retrieved successfully",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "JSS 1",
                "class_teacher_id": 3,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T16:43:37.000000Z",
                "teacher": {
                    "id": 3,
                    "name": "Fatima Hassan",
                    "email": "fatima.hassan@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 21,
                        "class_id": 1,
                        "section_id": 7,
                        "class_teacher_id": 3,
                        "created_by": 13,
                        "created_at": "2025-07-21T16:43:37.000000Z",
                        "updated_at": "2025-07-21T16:43:37.000000Z"
                    }
                ]
            },
            {
                "id": 2,
                "name": "JSS 2",
                "class_teacher_id": 2,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z",
                "teacher": {
                    "id": 2,
                    "name": "Ahmed Yusuf",
                    "email": "ahmed.yusuf@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "section_classes": [
                    {
                        "id": 4,
                        "class_id": 2,
                        "section_id": 1,
                        "class_teacher_id": 9,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 5,
                        "class_id": 2,
                        "section_id": 2,
                        "class_teacher_id": 6,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 6,
                        "class_id": 2,
                        "section_id": 3,
                        "class_teacher_id": 2,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    }
                ]
            },
            {
                "id": 6,
                "name": "JSS 2CC",
                "class_teacher_id": 3,
                "created_at": "2025-07-21T16:32:07.000000Z",
                "updated_at": "2025-07-21T16:41:16.000000Z",
                "teacher": {
                    "id": 3,
                    "name": "Fatima Hassan",
                    "email": "fatima.hassan@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 19,
                        "class_id": 6,
                        "section_id": 7,
                        "class_teacher_id": 3,
                        "created_by": 13,
                        "created_at": "2025-07-21T16:41:16.000000Z",
                        "updated_at": "2025-07-21T16:41:16.000000Z"
                    }
                ]
            },
            {
                "id": 3,
                "name": "JSS 3",
                "class_teacher_id": 3,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z",
                "teacher": {
                    "id": 3,
                    "name": "Fatima Hassan",
                    "email": "fatima.hassan@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 7,
                        "class_id": 3,
                        "section_id": 1,
                        "class_teacher_id": 9,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 8,
                        "class_id": 3,
                        "section_id": 2,
                        "class_teacher_id": 7,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 9,
                        "class_id": 3,
                        "section_id": 3,
                        "class_teacher_id": 1,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    }
                ]
            },
            {
                "id": 4,
                "name": "SSS 1",
                "class_teacher_id": 4,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z",
                "teacher": {
                    "id": 4,
                    "name": "Mohammed Ali",
                    "email": "mohammed.ali@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 10,
                        "class_id": 4,
                        "section_id": 1,
                        "class_teacher_id": 10,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 11,
                        "class_id": 4,
                        "section_id": 2,
                        "class_teacher_id": 6,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 12,
                        "class_id": 4,
                        "section_id": 3,
                        "class_teacher_id": 6,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    }
                ]
            },
            {
                "id": 5,
                "name": "SSS 2",
                "class_teacher_id": 5,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z",
                "teacher": {
                    "id": 5,
                    "name": "Aisha Bello",
                    "email": "aisha.bello@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 13,
                        "class_id": 5,
                        "section_id": 1,
                        "class_teacher_id": 6,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 14,
                        "class_id": 5,
                        "section_id": 2,
                        "class_teacher_id": 9,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 15,
                        "class_id": 5,
                        "section_id": 3,
                        "class_teacher_id": 9,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    }
                ]
            }
        ],
        "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/classes?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/classes?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/classes?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "https://api.harfasoftacademy.com.ng/api/v1/classes",
        "per_page": 15,
        "prev_page_url": null,
        "to": 6,
        "total": 6
    }
}


{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "2024 / 2025",
            "start_date": "2024-09-01",
            "end_date": "2025-07-31",
            "current": 0,
            "created_at": "2025-07-21T08:00:25.000000Z",
            "updated_at": "2025-07-21T08:00:25.000000Z",
            "calendars_count": 3
        },
        {
            "id": 2,
            "name": "2025 / 2026",
            "start_date": "2025-09-01",
            "end_date": "2026-07-31",
            "current": 1,
            "created_at": "2025-07-21T08:00:25.000000Z",
            "updated_at": "2025-07-21T08:00:25.000000Z",
            "calendars_count": 10
        },
        {
            "id": 3,
            "name": "2026 / 2027",
            "start_date": "2026-09-01",
            "end_date": "2027-07-31",
            "current": 0,
            "created_at": "2025-07-21T08:00:25.000000Z",
            "updated_at": "2025-07-21T08:00:25.000000Z",
            "calendars_count": 0
        }
    ],
    "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/sessions?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/sessions?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://api.harfasoftacademy.com.ng/api/v1/sessions?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://api.harfasoftacademy.com.ng/api/v1/sessions",
    "per_page": 15,
    "prev_page_url": null,
    "to": 3,
    "total": 3
}

{
    "message": "Fee structures retrieved successfully",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 14176,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": null,
                "school_class_id": null,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:03:11.000000Z",
                "updated_at": "2025-07-21T08:03:11.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": null,
                "school_class": null
            },
            {
                "id": 1,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": null,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": null,
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 2,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 1,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 1,
                    "name": "Nursery",
                    "description": "Nursery Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 3,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 1,
                "school_class_id": 1,
                "arm": "A",
                "amount": "51000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 1,
                    "name": "Nursery",
                    "description": "Nursery Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 4,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 1,
                "school_class_id": 1,
                "arm": "B",
                "amount": "50500.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 1,
                    "name": "Nursery",
                    "description": "Nursery Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 5,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 1,
                "school_class_id": 1,
                "arm": "C",
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 1,
                    "name": "Nursery",
                    "description": "Nursery Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 6,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 2,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 2,
                    "name": "Primary",
                    "description": "Primary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 7,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 2,
                "school_class_id": 1,
                "arm": "A",
                "amount": "51000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 2,
                    "name": "Primary",
                    "description": "Primary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 8,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 2,
                "school_class_id": 1,
                "arm": "B",
                "amount": "50500.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 2,
                    "name": "Primary",
                    "description": "Primary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 9,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 2,
                "school_class_id": 1,
                "arm": "C",
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 2,
                    "name": "Primary",
                    "description": "Primary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 10,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 3,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 3,
                    "name": "Secondary",
                    "description": "Secondary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 11,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 3,
                "school_class_id": 1,
                "arm": "A",
                "amount": "51000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 3,
                    "name": "Secondary",
                    "description": "Secondary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 12,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 3,
                "school_class_id": 1,
                "arm": "B",
                "amount": "50500.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 3,
                    "name": "Secondary",
                    "description": "Secondary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 13,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 3,
                "school_class_id": 1,
                "arm": "C",
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 3,
                    "name": "Secondary",
                    "description": "Secondary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 14,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 4,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 4,
                    "name": "Islamiyah",
                    "description": "Islamiyah Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            }
        ],
        "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=1",
        "from": 1,
        "last_page": 946,
        "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=946",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=5",
                "label": "5",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=6",
                "label": "6",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=7",
                "label": "7",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=8",
                "label": "8",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=9",
                "label": "9",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=10",
                "label": "10",
                "active": false
            },
            {
                "url": null,
                "label": "...",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=945",
                "label": "945",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=946",
                "label": "946",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=2",
        "path": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures",
        "per_page": 15,
        "prev_page_url": null,
        "to": 15,
        "total": 14176
    }
}

{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "student_id": 1,
            "fee_structure_id": 1,
            "amount_paid": "25000.00",
            "payment_date": "2024-09-15",
            "method": null,
            "reference": "TXN123456",
            "received_by": null,
            "created_at": "2025-07-21T08:03:31.000000Z",
            "updated_at": "2025-07-21T08:03:31.000000Z",
            "student": {
                "id": 1,
                "first_name": "Aisha",
                "last_name": "Bello",
                "other_name": "Fatima",
                "gender": "Female",
                "date_of_birth": "2010-03-15",
                "nationality": "Nigerian",
                "religion": "Islam",
                "address": "Barnawa Kaduna",
                "photo": null,
                "admission_date": "2023-09-01",
                "admission_no": "STU001",
                "previous_school_attended": null,
                "parent_id": 1,
                "relationship": "parent",
                "created_at": "2025-07-21T08:00:26.000000Z",
                "updated_at": "2025-07-21T08:00:26.000000Z"
            },
            "fee_structure": {
                "id": 1,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": null,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                }
            }
        }
    ],
    "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/student-payments?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/student-payments?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://api.harfasoftacademy.com.ng/api/v1/student-payments?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://api.harfasoftacademy.com.ng/api/v1/student-payments",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}

{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "Tuition Fee",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2026
        },
        {
            "id": 2,
            "name": "PTA Levy",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 3,
            "name": "Laboratory Fee",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 4,
            "name": "Library Fee",
            "is_mandatory": 0,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 5,
            "name": "Sports Fee",
            "is_mandatory": 0,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 6,
            "name": "Examination Fee",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 7,
            "name": "Development Levy",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 8,
            "name": "lesson fee",
            "is_mandatory": 1,
            "created_at": "2025-07-23T00:53:12.000000Z",
            "updated_at": "2025-07-23T00:53:12.000000Z",
            "structures_count": 0
        }
    ],
    "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-schedules?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-schedules?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-schedules?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://api.harfasoftacademy.com.ng/api/v1/fee-schedules",
    "per_page": 15,
    "prev_page_url": null,
    "to": 8,
    "total": 8
}

{
  "success": true,
  "message": "Exams retrieved successfully.",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "name": "Mid-Term Examination",
        "term_id": 1,
        "academic_session_id": 1,
        "section_id": 1,
        "start_date": "2024-10-15T00:00:00.000000Z",
        "end_date": "2025-08-01T00:00:00.000000Z",
        "weight": 100,
        "created_at": "2025-07-21T08:03:44.000000Z",
        "updated_at": "2025-07-21T08:03:44.000000Z",
        "term": {
          "id": 1,
          "name": "1st Term",
          "academic_session_id": 2,
          "start_date": "2025-01-01",
          "end_date": "2025-03-31",
          "is_active": 1,
          "created_by": 1,
          "created_at": "2025-07-21T08:00:26.000000Z",
          "updated_at": "2025-07-21T08:00:26.000000Z"
        }
      }
    ],
    "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/exams?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/exams?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "https://api.harfasoftacademy.com.ng/api/v1/exams?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "https://api.harfasoftacademy.com.ng/api/v1/exams",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}

{
    "success": true,
    "message": "Exam results retrieved successfully.",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "exam_id": 1,
                "student_id": 1,
                "subject_id": 1,
                "test1_score": 12,
                "test2_score": 15,
                "exam_score": 40,
                "grade": "A",
                "total_score": 67,
                "max_score": 100,
                "created_at": "2025-07-21T08:04:14.000000Z",
                "updated_at": "2025-07-21T08:04:14.000000Z",
                "exam": {
                    "id": 1,
                    "name": "Mid-Term Examination",
                    "term_id": 1,
                    "academic_session_id": 1,
                    "section_id": 1,
                    "start_date": "2024-10-15T00:00:00.000000Z",
                    "end_date": "2025-08-01T00:00:00.000000Z",
                    "weight": 100,
                    "created_at": "2025-07-21T08:03:44.000000Z",
                    "updated_at": "2025-07-21T08:03:44.000000Z"
                },
                "student": {
                    "id": 1,
                    "first_name": "Aisha",
                    "last_name": "Bello",
                    "other_name": "Fatima",
                    "gender": "Female",
                    "date_of_birth": "2010-03-15",
                    "nationality": "Nigerian",
                    "religion": "Islam",
                    "address": "Barnawa Kaduna",
                    "photo": null,
                    "admission_date": "2023-09-01",
                    "admission_no": "STU001",
                    "previous_school_attended": null,
                    "parent_id": 1,
                    "relationship": "parent",
                    "created_at": "2025-07-21T08:00:26.000000Z",
                    "updated_at": "2025-07-21T08:00:26.000000Z"
                },
                "subject": {
                    "id": 1,
                    "name": "Mathematics",
                    "code": "MTH101",
                    "description": "Core Mathematics",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                }
            }
        ],
        "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/exam-results?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/exam-results?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/exam-results?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "https://api.harfasoftacademy.com.ng/api/v1/exam-results",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}